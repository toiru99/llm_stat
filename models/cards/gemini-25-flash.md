---
type: Model
title: Gemini 2.5 Flash
creator: Google
license: Proprietary
intelligence_index: 20.0
price_blended_usd_1m: None
output_speed_tps: 235.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 46.3, z: 0.27, r: 54.0, estimated: false }  # 전문 지식
  reasoning: { s: 34.8, z: 0.06, r: 50.8, estimated: false }  # 추론
  coding: { s: 50.4, z: 0.16, r: 52.5, estimated: false }  # 코딩
  agentic: { s: 26.8, z: -0.37, r: 44.4, estimated: false }  # 에이전트
  trust: { s: 32.9, z: 0.24, r: 53.6, estimated: false }  # 신뢰성
  multimodal: { s: 78.3, z: 0.3, r: 54.6, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.97, r: 64.5, estimated: false }  # 긴문맥
  instruction: { s: 53.5, z: 0.03, r: 50.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# Gemini 2.5 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $None/1M · 235.0 t/s · TTFT 14.55s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.0 | +0.27 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 50.8 | +0.06 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 52.5 | +0.16 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 44.4 | -0.37 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 53.6 | +0.24 | 실측 | [[aa-omniscience]] 29.0%×1.0 |
| 멀티모달 | 54.6 | +0.3 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 64.5 | +0.97 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 50.4 | +0.03 | 실측 | [[ifbench]] 50.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
