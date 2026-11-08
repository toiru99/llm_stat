---
type: Model
title: DeepSeek V4 Pro 0813 (max)
creator: DeepSeek
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0.6908
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.2, z: 1.5, r: 72.4, estimated: false }  # 전문 지식
  reasoning: { s: 64.9, z: 0.87, r: 63.1, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.21, r: 68.1, estimated: false }  # 코딩
  agentic: { s: 77.6, z: 1.48, r: 72.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.5, z: 1.14, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 70.6, z: 0.75, r: 61.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# DeepSeek V4 Pro 0813 (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 33.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.4 | +1.5 | 실측 | [[gpqa-diamond]] 92.8%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 63.1 | +0.87 | 실측 | [[critpt]] 23.5%×1.0, [[gpqa-diamond]] 92.8%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 68.1 | +1.21 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 72.2 | +1.48 | 실측 | [[gdpval]] 1457.0%×1.0, [[tau3-banking]] 39.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.0 | +1.14 | 실측 | [[aa-lcr]] 80.3%×1.0 |
| 지시 따르기 | 61.2 | +0.75 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
