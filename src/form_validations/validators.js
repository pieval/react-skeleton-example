
// TODO Need to be refactored according to a validation strategy (Fields and sync form validation)
export function alpha(data) {
  return (data && data.match(/^[a-zA-Z]*$/)) ? undefined : 'Only alpha character accepted';
}

export function empty(data) {
  return (data && data.trim().length > 0) ? undefined : 'Empty values not allowed';
}
