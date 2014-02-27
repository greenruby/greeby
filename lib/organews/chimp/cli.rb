require 'thor'
require 'organews/config'
require 'organews/chimp/client'

module Organews
  module Chimp
    class Cli < Thor
      include Thor::Actions

      default_task :help
      class_option :configfile,
        aliases: "-c",
        banner: "PATH",
        default: File.expand_path("config.yml", Dir.pwd),
        desc: "Path to the configuration file to use"

      desc "check", "checks that config is ok to communicate with mailchimp."
      def check
        Organews::Config.load options[:configfile]
        mailchimp = Organews::Chimp::Client.new
        begin
          mailchimp.ping
          say set_color("All good.", :green, :bold)
        rescue Exception => e
          say set_color("*** Error ***", :red, :bold)
          say set_color(e.message, :red)
        end
      end

      desc "lists", "lists the available lists for this account."
      def lists
        Organews::Config.load options[:configfile]
        mailchimp = Organews::Chimp::Client.new
        begin
          mailchimp.lists.each do |l|
            say sprintf("%12s %-20s %s", set_color(l[:id], :cyan), l[:name], l[:members])
          end
        rescue Exception => e
          say set_color("*** Error ***", :red, :bold)
          say set_color(e.message, :red)
        end
      end

      desc "templates", "lists the available templates for this account."
      def templates
        Organews::Config.load options[:configfile]
        mailchimp = Organews::Chimp::Client.new
        begin
          mailchimp.templates.each do |l|
            say sprintf("%12s %s", set_color(l[:id], :cyan), l[:name])
          end
        rescue Exception => e
          say set_color("*** Error ***", :red, :bold)
          say set_color(e.message, :red)
        end
      end

      desc "template [del] [id]", "delete the template of given id."
      def template(action, id)
        Organews::Config.load options[:configfile]
        mailchimp = Organews::Chimp::Client.new
        begin
          if mailchimp.respond_to? "template_#{action}".to_sym
            say mailchimp.send("template_#{action}".to_sym, id)
          else
            say set_color("*** Error ***", :yellow, :bold)
            say set_color("Action #{action} unknown.", :yellow)
          end
        rescue Exception => e
          say set_color("*** Error ***", :red, :bold)
          say set_color(e.message, :red)
        end
      end

    end
  end
end
