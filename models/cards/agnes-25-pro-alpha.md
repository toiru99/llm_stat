---
type: Model
title: Agnes 2.5 Pro Alpha
creator: Sapiens AI
license: Open
intelligence_index: 31.0
price_blended_usd_1m: 0.187
output_speed_tps: 204.0
context_window: 1000000
status: current
size_class: Large
params_b: 397
is_reasoning: true
radar:
  knowledge: { s: 60.4, z: 0.94, r: 64.1, estimated: false }  # 전문 지식
  reasoning: { s: 60.7, z: 1.23, r: 68.5, estimated: false }  # 추론
  coding: { s: 59.2, z: 0.95, r: 64.3, estimated: false }  # 코딩
  agentic: { s: 35.3, z: -0.08, r: 48.8, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.67, r: 40.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.12, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 81.8, z: 1.22, r: 68.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Alpha
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Agnes 2.5 Pro Alpha

Sapiens AI · Open · Large(397B) · 컨텍스트 1M · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.45 · 출력 $0.9 · 혼합 $0.187/1M · 204.0 t/s · TTFT 2.78s · 1M ctx` · 가성비 165.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.1 | +0.94 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 68.5 | +1.23 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 64.3 | +0.95 | 실측 | [[scicode]] 43.0%×1.0 |
| 에이전트 | 48.8 | -0.08 | 실측 | [[gdpval]] 30.0%×1.0, [[tau3-banking]] 12.0%×1.0 |
| 신뢰성 | 40.0 | -0.67 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.7 | +1.12 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 68.4 | +1.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
