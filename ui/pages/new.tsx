import { Button } from "@mui/material"
import React, { useState } from "react";
import ComboBox from "../src/components/Autocomplete"
import { Bird, getBirds, saveRecord } from "../src/api/hello";
import moment from "moment";

const apiBirds = getBirds()

function New() {
    const [birds, setBirds] = useState<Bird[]>([])
    const [selected, setSelected] = useState<string | null>(null)

    apiBirds.then((value: Bird[]) => {
        setBirds(value)
    })
    return <div>
            <h1>Submit new birdwatch</h1>
            <ComboBox
             birds={birds}
             setSelected={(id: string | null) => setSelected(id)}

            ></ComboBox>
            <Button
                onClick={() => 
                    saveRecord({
                    bird: selected || '1',
                    user: '1',
                    date: moment(),
                })}
            >Submit</Button>
        </div>
}

export default New