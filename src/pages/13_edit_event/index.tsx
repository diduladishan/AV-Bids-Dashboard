import {
  Textarea,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

import DELETE_BUTTON from "../../assets/12_edit_event/ep_delete.png";

export function index() {
  return (
    <div className="container mx-auto mb-8">
      <h2 className="text-[20px] font-semibold mb-6">Edit Event</h2>

      <div className="flex items-center gap-8 mb-6">
        <div className="flex flex-col items-center gap-2">
          <div className="flex  items-center justify-center rounded-full w-10 h-10 bg-[#42D27A] text-white">
            <p>1</p>
          </div>

          <p className="font-medium text-[16px]">Update Information</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex  items-center justify-center rounded-full w-10 h-10 bg-[#d9f6e4] text-[#888888]">
            <p>2</p>
          </div>
          <p className="text-[16px] font-medium text-[#888888]">
            Equipment Requirements
          </p>
        </div>
      </div>

      <p className="font-medium text-[18px] mb-4">Event Details</p>

      <div className="font-medium text-[18px] text-[#353535]">
        <p className="mb-2">Event Title </p>
        <div className="w-72 mb-5">
          <Input
            label="Ex: 2023 Meeting Expo San Deigo"
            crossOrigin=""
            className="rounded-md bg-[#eeebfb] "
          />
        </div>
        <p className="mb-2">Event Description </p>
        <div className="w-96 mb-5">
          <Textarea label="Message" className="bg-[#eeebfb]" />
        </div>
        <p className="mb-2">Event Type </p>
        <div className="w-72 mb-5">
          <Select label="In-Person" className="bg-[#eeebfb]">
            <Option>Option 01</Option>
            <Option>Option 02</Option>
            <Option>Option 03</Option>
            <Option>Option 04</Option>
            <Option>Option 05</Option>
          </Select>
        </div>
        <p className="mb-2">Event Category </p>
        <div className="w-72 mb-5">
          <Select label="Coporate" className="bg-[#eeebfb]">
            <Option>Option 01</Option>
            <Option>Option 02</Option>
            <Option>Option 03</Option>
            <Option>Option 04</Option>
            <Option>Option 05</Option>
          </Select>
        </div>
        <p className="mb-2">Event Sub Category</p>
        <div className="w-72 mb-5">
          <Select label="General Meeting" className="bg-[#eeebfb]">
            <Option>Option 01</Option>
            <Option>Option 02</Option>
            <Option>Option 03</Option>
            <Option>Option 04</Option>
            <Option>Option 05</Option>
          </Select>
        </div>
        <p className="mb-2">Event Budget</p>
        <div className="w-72 mb-8">
          <Select label="$70,000 - $150,000" className="bg-[#eeebfb]">
            <Option>Option 01</Option>
            <Option>Option 02</Option>
            <Option>Option 03</Option>
            <Option>Option 04</Option>
            <Option>Option 05</Option>
          </Select>
        </div>
      </div>

      <p className="font-medium text-[18px] mb-4">Address & Location</p>

      <div className="font-medium text-[18px] text-[#353535]">
        <p className="mb-2">Venue Name</p>
        <div className="w-72 mb-5">
          <Input
            label="Venue Name"
            crossOrigin=""
            className="rounded-md bg-[#eeebfb] "
          />
        </div>

        <p className="mb-2">Address</p>
        <div className="w-72 mb-5">
          <Input
            label="Address"
            crossOrigin=""
            className="rounded-md bg-[#eeebfb] "
          />
        </div>

        <p className="mb-2">City </p>
        <div className="w-72 mb-5">
          <Input
            label="Enter City"
            crossOrigin=""
            className="rounded-md bg-[#eeebfb] "
          />
        </div>

        <p className="mb-2">State</p>
        <div className="w-72 mb-5">
          <Select label="Select State" className="bg-[#eeebfb]">
            <Option>Option 01</Option>
            <Option>Option 02</Option>
            <Option>Option 03</Option>
            <Option>Option 04</Option>
            <Option>Option 05</Option>
          </Select>
        </div>

        <p className="mb-2">Zip</p>
        <div className="w-72 mb-8">
          <Input
            label="Enter Zip Code"
            crossOrigin=""
            className="rounded-md bg-[#eeebfb] "
          />
        </div>
      </div>

      <p className="font-medium text-[18px] mb-4">File Attachment</p>

      <div className="grid grid-cols-2 gap-4 font-medium text-[18px] text-black">
        <div className="flex items-center gap-24">
          <p>guideline and requirements.doc</p>
          <img
            src={DELETE_BUTTON}
            alt="aad"
            className="object-scale-down w-[34px]"
          />
        </div>
        <div className="flex items-center gap-24">
          <p>guideline and requirements.doc</p>
          <img
            src={DELETE_BUTTON}
            alt="aad"
            className="object-scale-down w-[34px]"
          />
        </div>
        <div className="flex items-center gap-24">
          <p>guideline and requirements.doc</p>
          <img
            src={DELETE_BUTTON}
            alt="aad"
            className="object-scale-down w-[34px]"
          />
        </div>
        <div className="flex items-center gap-24">
          <p>guideline and requirements.doc</p>
          <img
            src={DELETE_BUTTON}
            alt="aad"
            className="object-scale-down w-[34px]"
          />
        </div>
      </div>
    </div>
  );
}

export default index;
