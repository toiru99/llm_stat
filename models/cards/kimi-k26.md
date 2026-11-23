---
type: Model
title: Kimi K2.6
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.702
output_speed_tps: 38.1961879102508
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.1, z: 1.34, r: 70.1, estimated: false }  # 전문 지식
  reasoning: { s: 55.4, z: 0.98, r: 64.6, estimated: false }  # 추론
  coding: { s: 71.1, z: 1.05, r: 65.8, estimated: false }  # 코딩
  agentic: { s: 68.1, z: 0.8, r: 62.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.77, r: 61.6, estimated: false }  # 멀티모달
  long_context: { s: 91.4, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 89.7, z: 1.5, r: 72.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Kimi K2.6

Kimi · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.702/1M · 38.1961879102508 t/s · TTFT 8.28006583661951s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.1 | +1.34 | 실측 | [[gpqa-diamond]] 91.1111111111111%×0.4, [[humanitys-last-exam]] 37.488415199258604%×0.3 |
| 추론 | 64.6 | +0.98 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 91.1111111111111%×1.0, [[humanitys-last-exam]] 37.488415199258604%×1.0 |
| 코딩 | 65.8 | +1.05 | 실측 | [[scicode]] 51.5046296296296%×1.0, [[terminal-bench]] 43.9393939393939%×0.5 |
| 에이전트 | 62.0 | +0.8 | 실측 | [[gdpval]] 1046.37%×1.0, [[tau2-bench]] 95.906432748538%×1.0, [[tau3-banking]] 23.298969072164898%×1.0, [[terminal-bench]] 43.9393939393939%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.6 | +0.77 | 실측 | [[mmmu-pro]] 79.364161849711%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 72.5 | +1.5 | 실측 | [[ifbench]] 75.9863945578231%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
