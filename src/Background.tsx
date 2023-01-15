import React from "react";
import { BackgroundEnum } from "./types"
import { Radio, Label } from "flowbite-react";

export const Background = () => {
  return <React.Fragment>
    <div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
        pick a background
      </h5>
      <div>
        {Object.keys(BackgroundEnum).map((backgroundEnumEntry: string) =>
          <div className="flex items-center gap-2">
            <Radio
              id={backgroundEnumEntry}
              name="background"
              value={backgroundEnumEntry}
              onClick={() => {
                alert(`The user has selected ${backgroundEnumEntry}`);
              }}
            />
            <Label htmlFor={backgroundEnumEntry}>
              {backgroundEnumEntry}
            </Label>
          </div>
        )}
      </div>
    </div>
  </React.Fragment>;
};
