#- XLsuite, an integrated CMS, CRM and ERP for medium businesses
#- Copyright 2005-2009 iXLd Media Inc.  See LICENSE for details.

class ContactRequestRecipient < ActiveRecord::Base
  belongs_to :party
  belongs_to :contact_request
end
