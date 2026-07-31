---
type: Model
title: Granite 4.1 3B
creator: IBM
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Tiny
params_b: 3
is_reasoning: false
radar:
  knowledge: { s: 14.4, z: -1.27, r: 31.0, estimated: false }  # 전문 지식
  reasoning: { s: 9.6, z: -1.25, r: 31.2, estimated: false }  # 추론
  coding: { s: 14.3, z: -1.36, r: 29.6, estimated: false }  # 코딩
  agentic: { s: 6.5, z: -1.16, r: 32.6, estimated: false }  # 에이전트
  trust: { s: 4.6, z: -1.12, r: 33.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 3.9, z: -1.35, r: 29.8, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.91, r: 36.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.1 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# Granite 4.1 3B

IBM · Open · Tiny(3B) · 컨텍스트 131k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.0 | -1.27 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 31.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 31.2 | -1.25 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 31.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 29.6 | -1.36 | 실측 | [[scicode]] 12.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 32.6 | -1.16 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 20.0%×1.0, [[tau3-banking]] 1.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 33.3 | -1.12 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.8 | -1.35 | 실측 | [[aa-lcr]] 3.0%×1.0 |
| 지시 따르기 | 36.3 | -0.91 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
