---
type: Model
title: DeepSeek V4 Flash (high)
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
  knowledge: { s: 71.9, z: 0.99, r: 64.9, estimated: false }  # 전문 지식
  reasoning: { s: 68.9, z: 1.05, r: 65.7, estimated: false }  # 추론
  coding: { s: 56.4, z: 0.65, r: 59.7, estimated: false }  # 코딩
  agentic: { s: 54.7, z: 0.71, r: 60.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.39, r: 70.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# DeepSeek V4 Flash (high)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.11 · 출력 $0.23 · 혼합 $0.0622/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.9 | +0.99 | 실측 | [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 65.7 | +1.05 | 실측 | [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 59.7 | +0.65 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 60.6 | +0.71 | 실측 | [[gdpval]] 1010.0%×1.0, [[tau3-banking]] 26.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 70.8 | +1.39 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
