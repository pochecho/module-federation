import React, { useState } from "react";


export default function Label({ name }) {
    return (
        <label className="bc-bg-secondary">
            {name}
        </label>
    );
} 