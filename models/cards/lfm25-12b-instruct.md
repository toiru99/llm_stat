---
type: Model
title: LFM2.5-1.2B-Instruct
creator: Liquid AI
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 13.4, z: -1.31, r: 30.4, estimated: false }  # 전문 지식
  reasoning: { s: 13.0, z: -1.08, r: 33.8, estimated: false }  # 추론
  coding: { s: 2.2, z: -1.86, r: 22.2, estimated: false }  # 코딩
  agentic: { s: 5.6, z: -1.19, r: 32.1, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.54, r: 41.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.43, r: 28.5, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.3, r: 45.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2.5-1.2B-Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-12
timestamp: 2026-07-12T00:00:00Z
---

# LFM2.5-1.2B-Instruct

Liquid AI · Open · Unknown · 컨텍스트 32k · 종합지능 **3.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.4 | -1.31 | 실측 | [[aa-omniscience]] 6.0%×1.0, [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 33.8 | -1.08 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 22.2 | -1.86 | 실측 | [[scicode]] 2.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.1 | -1.19 | 실측 | [[tau2-bench]] 11.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 41.9 | -0.54 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.5 | -1.43 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 45.5 | -0.3 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
