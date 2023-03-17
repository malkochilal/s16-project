/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("users", (tbl) => {
            tbl.increments("user_id");
            tbl.string("username", 128)
                .unique()
                .notNullable();
            tbl.string("password", 140)
                .notNullable();
            tbl.string("email").unique()
                .notNullable();
            tbl.string("location")
                .notNullable();
            tbl.timestamp("signup_date")
                .notNullable();

        })
        .createTable("posts", (tbl) => {
            tbl.increments("post_id");
            tbl.string("title", 128)
                .notNullable()

            tbl.string("content", 512) //body

                .notNullable();
            tbl.string("location")
                .notNullable();
            tbl.timestamp("post_date")
                .notNullable();

            tbl
                .integer("user_id")
                .unsigned()
                .notNullable()
                .references("user_id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            // tbl.string("password", 128)
            //     .notNullable();
            // tbl.integer("role_id")
            //     .unsigned()
            //     // .notNullable()
            //     .references("id")
            //     .inTable("roles")
            //     .onUpdate("CASCADE")
            //     .onDelete("CASCADE");


        })

        .createTable("comments", (tbl) => {
            tbl.increments("comment_id");
            tbl.string("content");
            // .notNullable();
            tbl.timestamp("comment_date")
                .notNullable();
            // .notNullable();
            tbl.string("location")
                .notNullable();
            tbl
                .integer("post_id")
                // .notNullable()
                .unsigned()
                .references("post_id")
                .inTable("posts")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")

            tbl
                .integer("user_id")
                // .notNullable();
                .unsigned()
                .references("user_id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");


        })
        .createTable("likes", (tbl) => {
            tbl.increments("like_id");
            tbl.string("like");
            tbl.timestamp("like_date")
                .notNullable();
            tbl
                .integer("post_id")
                // tbl.integer("comments_id")
                .unsigned()
                .notNullable()
                .references("post_id")
                .inTable("posts")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");

            tbl
                .integer("user_id")
                .unsigned()
                // .notNullable()
                .references("user_id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            // tbl.primary(["clone_id", "id"]);

        })
        .createTable("follows", (tbl) => {
            tbl.increments("follow_id");
            tbl.string("follow_status")
                .notNullable();
            tbl
                .timestamp("follow_date")
                .notNullable();

            tbl
                .integer("followee_id")
                .unsigned()
                // .notNullable()
                .references("user_id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");

            tbl
                .integer("follower_id")
                .unsigned()
                .references("user_id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("follows")
        .dropTableIfExists("likes")
        .dropTableIfExists("comments")
        .dropTableIfExists("posts")
        .dropTableIfExists("users")

};
