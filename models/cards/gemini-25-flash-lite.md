---
type: Model
title: Gemini 2.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: 0.067
output_speed_tps: 330.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 32.3, z: -0.42, r: 43.6, estimated: false }  # 전문 지식
  reasoning: { s: 24.5, z: -0.53, r: 42.0, estimated: false }  # 추론
  coding: { s: 23.6, z: -1.01, r: 34.9, estimated: false }  # 코딩
  agentic: { s: 12.9, z: -0.93, r: 36.0, estimated: false }  # 에이전트
  trust: { s: 24.4, z: -0.12, r: 48.2, estimated: false }  # 신뢰성
  multimodal: { s: 61.4, z: -0.52, r: 42.2, estimated: false }  # 멀티모달
  long_context: { s: 67.5, z: 0.52, r: 57.7, estimated: false }  # 긴문맥
  instruction: { s: 53.5, z: -0.03, r: 49.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# Gemini 2.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · 330.0 t/s · TTFT 22.2s · 1M ctx` · 가성비 164.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.6 | -0.42 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 42.0 | -0.53 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 34.9 | -1.01 | 실측 | [[scicode]] 19.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 36.0 | -0.93 | 실측 | [[tau2-bench]] 18.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 48.2 | -0.12 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | 42.2 | -0.52 | 실측 | [[mmmu-pro]] 58.0%×1.0 |
| 긴문맥 | 57.7 | +0.52 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 49.6 | -0.03 | 실측 | [[ifbench]] 50.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
