---
type: Model
title: Gemini 2.5 Flash
creator: Google
license: Proprietary
intelligence_index: 20.0
price_blended_usd_1m: 0.331
output_speed_tps: 222.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 45.7, z: 0.2, r: 53.0, estimated: false }  # 전문 지식
  reasoning: { s: 34.9, z: -0.04, r: 49.3, estimated: false }  # 추론
  coding: { s: 50.4, z: 0.07, r: 51.0, estimated: false }  # 코딩
  agentic: { s: 26.8, z: -0.4, r: 43.9, estimated: false }  # 에이전트
  trust: { s: 26.7, z: -0.09, r: 48.7, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.22, r: 53.3, estimated: false }  # 멀티모달
  long_context: { s: 79.5, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 53.5, z: -0.04, r: 49.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Gemini 2.5 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 222.0 t/s · TTFT 21.0s · 1M ctx` · 가성비 60.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.0 | +0.2 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 49.3 | -0.04 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 51.0 | +0.07 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 43.9 | -0.4 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 48.7 | -0.09 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | 53.3 | +0.22 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 49.5 | -0.04 | 실측 | [[ifbench]] 50.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
