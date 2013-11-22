class AddColumnsToGroups < ActiveRecord::Migration
  def change
    add_column :groups, :status, :integer
    add_column :groups, :users_count, :integer, :default => 0

  end
end
