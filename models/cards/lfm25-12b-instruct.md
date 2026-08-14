---
type: Model
title: LFM2.5-1.2B-Instruct
creator: Liquid AI
license: Open
intelligence_index: 2.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: current
size_class: Tiny
params_b: 1.17
is_reasoning: false
radar:
  knowledge: { s: 13.8, z: -1.3, r: 30.5, estimated: false }  # 전문 지식
  reasoning: { s: 12.7, z: -1.11, r: 33.4, estimated: false }  # 추론
  coding: { s: 2.2, z: -1.88, r: 21.7, estimated: false }  # 코딩
  agentic: { s: 5.6, z: -1.22, r: 31.7, estimated: false }  # 에이전트
  trust: { s: 15.1, z: -0.53, r: 42.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.52, r: 27.2, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.37, r: 44.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2.5-1.2B-Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# LFM2.5-1.2B-Instruct

Liquid AI · Open · Tiny(1.17B) · 컨텍스트 32k · 종합지능 **2.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.5 | -1.3 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 33.4 | -1.11 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 21.7 | -1.88 | 실측 | [[scicode]] 2.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 31.7 | -1.22 | 실측 | [[tau2-bench]] 11.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 42.1 | -0.53 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.2 | -1.52 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 44.4 | -0.37 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
