class GroupsUser < ActiveRecord::Base
  belongs_to :user
  belongs_to :group

  after_create :increment_group_counter_cache
  after_destroy :decrement_group_counter_cache

  def increment_group_counter_cache
    self.group.users_count += 1
  end

  def decrement_group_counter_cache
    self.group.users_count -= 1
  end

end
