---
type: Model
title: DeepSeek V4.1 Flash (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1845
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 13.3, z: -1.63, r: 25.6, estimated: false }  # 전문 지식
  reasoning: { s: 13.3, z: -1.47, r: 28.0, estimated: false }  # 추론
  coding: { s: 47.0, z: 0.31, r: 54.6, estimated: false }  # 코딩
  agentic: { s: 72.3, z: 1.26, r: 68.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 68.9, z: -0.13, r: 48.1, estimated: false }  # 멀티모달
  long_context: { s: 62.3, z: 0.27, r: 54.1, estimated: false }  # 긴문맥
  instruction: { s: 44.2, z: -0.38, r: 44.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# DeepSeek V4.1 Flash (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1845/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 25.6 | -1.63 | 실측 | [[humanitys-last-exam]] 10.8%×0.3 |
| 추론 | 28.0 | -1.47 | 실측 | [[humanitys-last-exam]] 10.8%×1.0 |
| 코딩 | 54.6 | +0.31 | 실측 | [[scicode]] 35.5%×1.0 |
| 에이전트 | 68.9 | +1.26 | 실측 | [[gdpval]] 1349.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 48.1 | -0.13 | 실측 | [[mmmu-pro]] 66.0%×1.0 |
| 긴문맥 | 54.1 | +0.27 | 실측 | [[aa-lcr]] 55.3%×1.0 |
| 지시 따르기 | 44.4 | -0.38 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
