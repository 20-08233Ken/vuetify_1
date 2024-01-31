<template>
    <Vueform
        style="width: 100%;margin-bottom: 10rem;" 
      size="lg"
    
    >
      <SelectElement
        name="select"
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
        :floating="false"
        size="lg"
      />
      <TextElement
        name="number_2"
        input-type="number"
        :rules="[
          'nullable',
          'numeric',
        ]"
        autocomplete="off"
        label="Number"
      />
      <SelectElement
        name="select_2"
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
        name="h4"
        tag="h4"
        content="Period of Validity"
      />
      <SelectElement
        name="select_1"
        :items="[
          {
            value: 0,
            label: 'Label',
          },
        ]"
        :search="true"
        :native="false"
        label="Select"
        input-type="search"
        autocomplete="off"
      />

      <DateElement
        name="date"
        label="From"
        :columns="{
          container: 6,
        }"

    
      />
      <DateElement
        name="date_1"
        label="To"
        :columns="{
          container: 6,
        }"
      />
      <ButtonElement
        name="primaryButton"
        button-label="Add"
        align="right"
        
      />
    </Vueform
   
    >
  </template>