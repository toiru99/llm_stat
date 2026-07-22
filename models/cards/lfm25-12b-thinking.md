---
type: Model
title: LFM2.5-1.2B-Thinking
creator: Liquid AI
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: current
size_class: Tiny
params_b: 1.17
is_reasoning: true
radar:
  knowledge: { s: 14.3, z: -1.27, r: 31.0, estimated: false }  # 전문 지식
  reasoning: { s: 12.7, z: -1.1, r: 33.5, estimated: false }  # 추론
  coding: { s: 4.4, z: -1.77, r: 23.5, estimated: false }  # 코딩
  agentic: { s: 10.1, z: -1.01, r: 34.8, estimated: false }  # 에이전트
  trust: { s: 2.4, z: -1.2, r: 32.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.46, r: 28.1, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.44, r: 43.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2.5-1.2B-Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# LFM2.5-1.2B-Thinking

Liquid AI · Open · Tiny(1.17B) · 컨텍스트 32k · 종합지능 **3.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.0 | -1.27 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 34.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 33.5 | -1.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 34.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 23.5 | -1.77 | 실측 | [[scicode]] 4.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 34.8 | -1.01 | 실측 | [[tau2-bench]] 20.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 32.0 | -1.2 | 실측 | [[aa-omniscience]] 3.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.1 | -1.46 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 43.4 | -0.44 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
