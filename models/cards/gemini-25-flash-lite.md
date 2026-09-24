---
type: Model
title: Gemini 2.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: 0.067
output_speed_tps: 355.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 32.1, z: -0.45, r: 43.2, estimated: false }  # 전문 지식
  reasoning: { s: 23.9, z: -0.55, r: 41.8, estimated: false }  # 추론
  coding: { s: 7.6, z: -0.95, r: 35.8, estimated: false }  # 코딩
  agentic: { s: 12.9, z: -0.95, r: 35.7, estimated: false }  # 에이전트
  trust: { s: 21.6, z: -0.19, r: 47.2, estimated: false }  # 신뢰성
  multimodal: { s: 58.9, z: -0.58, r: 41.4, estimated: false }  # 멀티모달
  long_context: { s: 62.9, z: 0.38, r: 55.7, estimated: false }  # 긴문맥
  instruction: { s: 53.5, z: 0.0, r: 50.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Gemini 2.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · 355.0 t/s · TTFT 20.7s · 1M ctx` · 가성비 134.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.2 | -0.45 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 41.8 | -0.55 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 35.8 | -0.95 | 실측 | [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 35.7 | -0.95 | 실측 | [[tau2-bench]] 18.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 47.2 | -0.19 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | 41.4 | -0.58 | 실측 | [[mmmu-pro]] 58.0%×1.0 |
| 긴문맥 | 55.7 | +0.38 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 50.0 | +0.0 | 실측 | [[ifbench]] 50.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
