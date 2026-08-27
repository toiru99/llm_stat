---
type: Model
title: Granite 4.1 8B
creator: IBM
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.055
output_speed_tps: 120.0
context_window: 131000
status: current
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 20.2, z: -1.01, r: 34.9, estimated: false }  # 전문 지식
  reasoning: { s: 14.8, z: -1.02, r: 34.7, estimated: false }  # 추론
  coding: { s: 24.4, z: -0.99, r: 35.1, estimated: false }  # 코딩
  agentic: { s: 14.1, z: -0.89, r: 36.7, estimated: false }  # 에이전트
  trust: { s: 12.8, z: -0.67, r: 39.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.3, z: -1.13, r: 33.1, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.67, r: 40.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.1 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Granite 4.1 8B

IBM · Open · Small(8B) · 컨텍스트 131k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $0.05 · 출력 $0.1 · 혼합 $0.055/1M · 120.0 t/s · TTFT 0.78s · 131k ctx` · 가성비 109.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.9 | -1.01 | 실측 | [[aa-omniscience]] 12.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.7 | -1.02 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.1 | -0.99 | 실측 | [[scicode]] 22.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 36.7 | -0.89 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 39.9 | -0.67 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.1 | -1.13 | 실측 | [[aa-lcr]] 11.0%×1.0 |
| 지시 따르기 | 40.0 | -0.67 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
