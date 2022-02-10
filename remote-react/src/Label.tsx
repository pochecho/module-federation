import React, { useState } from "react";

import "./label.css"

export default function Label({ name }) {
    return (
        <label className="bc-bg-secondary">
            {name}
        </label>
    );
} 