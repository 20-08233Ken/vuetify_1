<template>
    <Vueform
    style="width: 100%;margin-bottom: 8rem;" 
      size="lg"
    
    >
    <SelectElement
    style="color: #4B4B4B;"
      name="campus"
      :items="[
        {
          value: 0,
          label: 'Label',
        },
      ]"
      :search="true"
      :native="false"
      label="Campus"
      input-type="search"
      autocomplete="off"
    />
    <SelectElement
    style="color: #4B4B4B;"
      name="department"
      :items="[
        {
          value: 0,
          label: 'Label',
        },
      ]"
      :search="true"
      :native="false"
      label="Department"
      input-type="search"
      autocomplete="off"
    />
    <SelectElement
    style="color: #4B4B4B;"
      name="program"
      :items="[
        {
          value: 0,
          label: 'Label',
        },
      ]"
      :search="true"
      :native="false"
      label="Program"
      input-type="search"
      autocomplete="off"
    />
    <TextElement
    style="color: #4B4B4B;"
      name="initial_operation"
      input-type="number"
      :rules="[
        'nullable',
        'numeric',
      ]"
      autocomplete="off"
      label="Year of Initial Operation"
    />
    <TextElement
    style="color: #4B4B4B;"
      name="fbatch_graduate"
      input-type="number"
      :rules="[
        'nullable',
        'numeric',
      ]"
      autocomplete="off"
      label="Year of First-batch Graduate"
    />

    <SelectElement
    style="color: #4B4B4B;"
        name="status"
        :items="[
          {
            value: 0,
            label: 'Label',
          },
        ]"
        :search="true"
        :native="false"
        label="Status"
        input-type="search"
        autocomplete="off"
      />


      <StaticElement
      style="margin-top: 2rem; color: #D00412; font-size: 18px;font-weight: bold;"
        name="h4"
        tag="h4"
        content="Period of Validity"
      />


      <DateElement
      style="color: #4B4B4B;"
        name="date"
        label="From"
        :columns="{
          container: 6,
        }"

    
      />
      <DateElement
      style="color: #4B4B4B;"
        name="date_1"
        label="To"
        :columns="{
          container: 6,
        }"
      />

      <SelectElement
      style="color: #4B4B4B;"
        name="remarks"
        :items="[
          {
            value: 0,
            label: 'Label',
          },
        ]"
        :search="true"
        :native="false"
        label="Remarks"
        input-type="search"
        autocomplete="off"
      />





      <ButtonElement
        name="primaryButton"
        button-label="Add"
        align="right"
        
      />
      
    </Vueform
   
    >
  </template>