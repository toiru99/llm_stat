---
type: Model
title: MiMo-V2-Omni-0327
creator: Xiaomi
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.6, z: 0.77, r: 61.5, estimated: false }  # 전문 지식
  reasoning: { s: 39.8, z: 0.23, r: 53.4, estimated: false }  # 추론
  coding: { s: 54.0, z: 0.44, r: 56.6, estimated: false }  # 코딩
  agentic: { s: 71.4, z: 0.86, r: 62.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.3, z: 0.4, r: 56.0, estimated: false }  # 멀티모달
  long_context: { s: 82.7, z: 0.76, r: 61.5, estimated: false }  # 긴문맥
  instruction: { s: 77.6, z: 1.13, r: 66.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Omni-0327
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# MiMo-V2-Omni-0327

Xiaomi · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 61.5 | +0.77 | 실측 | [[gpqa-diamond]] 85.4545%×0.4, [[humanitys-last-exam]] 22.5672%×0.3 |
| 추론 | 53.4 | +0.23 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 85.4545%×1.0, [[humanitys-last-exam]] 22.5672%×1.0 |
| 코딩 | 56.6 | +0.44 | 실측 | [[terminal-bench]] 35.6061%×0.5 |
| 에이전트 | 62.9 | +0.86 | 실측 | [[tau2-bench]] 88.0117%×1.0, [[terminal-bench]] 35.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.0 | +0.4 | 실측 | [[mmmu-pro]] 73.9306%×1.0 |
| 긴문맥 | 61.5 | +0.76 | 실측 | [[aa-lcr]] 73.3333%×1.0 |
| 지시 따르기 | 66.9 | +1.13 | 실측 | [[ifbench]] 67.3469%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
