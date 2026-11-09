---
type: Model
title: DeepSeek R1 0528
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 1.8175
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.7, z: 0.37, r: 55.5, estimated: false }  # 전문 지식
  reasoning: { s: 53.5, z: 0.36, r: 55.4, estimated: false }  # 추론
  coding: { s: 24.1, z: -0.44, r: 43.3, estimated: false }  # 코딩
  agentic: { s: 24.1, z: -0.35, r: 44.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 62.8, z: 0.3, r: 54.5, estimated: false }  # 긴문맥
  instruction: { s: 38.6, z: -0.61, r: 40.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 0528
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# DeepSeek R1 0528

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $1.85 · 출력 $2.75 · 혼합 $1.8175/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.5 | +0.37 | 실측 | [[gpqa-diamond]] 81.3%×0.4, [[humanitys-last-exam]] 15.8%×0.3 |
| 추론 | 55.4 | +0.36 | 실측 | [[gpqa-diamond]] 81.3%×1.0, [[humanitys-last-exam]] 15.8%×1.0 |
| 코딩 | 43.3 | -0.44 | 실측 | [[terminal-bench]] 15.9%×0.5 |
| 에이전트 | 44.7 | -0.35 | 실측 | [[terminal-bench]] 15.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.5 | +0.3 | 실측 | [[aa-lcr]] 55.7%×1.0 |
| 지시 따르기 | 40.9 | -0.61 | 실측 | [[ifbench]] 39.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
