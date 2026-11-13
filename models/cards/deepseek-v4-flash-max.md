---
type: Model
title: DeepSeek V4 Flash (max)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0622
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.3, z: 1.21, r: 68.2, estimated: false }  # 전문 지식
  reasoning: { s: 69.0, z: 1.25, r: 68.8, estimated: false }  # 추론
  coding: { s: 60.1, z: 0.74, r: 61.2, estimated: false }  # 코딩
  agentic: { s: 56.4, z: 0.72, r: 60.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.92, r: 63.7, estimated: false }  # 긴문맥
  instruction: { s: 94.2, z: 1.77, r: 76.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# DeepSeek V4 Flash (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.11 · 출력 $0.23 · 혼합 $0.0622/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.2 | +1.21 | 실측 | [[gpqa-diamond]] 89.4%×0.4, [[humanitys-last-exam]] 34.8%×0.3 |
| 추론 | 68.8 | +1.25 | 실측 | [[gpqa-diamond]] 89.4%×1.0, [[humanitys-last-exam]] 34.8%×1.0 |
| 코딩 | 61.2 | +0.74 | 실측 | [[scicode]] 45.3%×1.0, [[terminal-bench]] 35.6%×0.5 |
| 에이전트 | 60.9 | +0.72 | 실측 | [[gdpval]] 1046.0%×1.0, [[itbench]] 31.5%×1.0, [[tau3-banking]] 30.9%×1.0, [[terminal-bench]] 35.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.7 | +0.92 | 실측 | [[aa-lcr]] 74.3%×1.0 |
| 지시 따르기 | 76.5 | +1.77 | 실측 | [[ifbench]] 79.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
