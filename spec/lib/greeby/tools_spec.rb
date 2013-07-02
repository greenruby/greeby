require_relative '../../spec_helper'
require 'lib/greeby/tools.rb'

describe Greeby::Tools do

  include Greeby::Tools

  it ".clean(str) cleans names very strictly" do
    str = "a.b-cde()"
    expected = "abcde"
    expect(clean(str)).to eq expected
  end

end