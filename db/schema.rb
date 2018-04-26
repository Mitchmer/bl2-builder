# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180425223645) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "build_guns", force: :cascade do |t|
    t.bigint "build_id"
    t.bigint "gun_id"
    t.string "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["build_id"], name: "index_build_guns_on_build_id"
    t.index ["gun_id"], name: "index_build_guns_on_gun_id"
  end

  create_table "builds", force: :cascade do |t|
    t.string "name"
    t.string "character"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.json "skills", default: {"maya"=>{"ward"=>0, "accelerate"=>0, "kinetic_reflection"=>0, "suspension"=>0, "inertia"=>0, "fleet"=>0, "converge"=>0, "quicken"=>0, "sub_sequence"=>0, "thoughlock"=>0, "minds_eye"=>0, "sweet_release"=>0, "restoration"=>0, "wreck"=>0, "elated"=>0, "recompense"=>0, "res"=>0, "sustenance"=>0, "life_tap"=>0, "scorn"=>0, "flicker"=>0, "foresight"=>0, "immolate"=>0, "helios"=>0, "chain_reaction"=>0, "backdraft"=>0, "cloud_kill"=>0, "reaper"=>0, "blight_pheonix"=>0, "ruin"=>0}}
    t.index ["user_id"], name: "index_builds_on_user_id"
  end

  create_table "guns", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "build_guns", "builds"
  add_foreign_key "build_guns", "guns"
  add_foreign_key "builds", "users"
end
