---
type: Model
title: Gemini 3 Flash
creator: Google
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 0.435
output_speed_tps: 210.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.0, z: 1.77, r: 76.5, estimated: false }  # 전문 지식
  reasoning: { s: 60.4, z: 1.17, r: 67.5, estimated: false }  # 추론
  coding: { s: 59.1, z: 0.83, r: 62.5, estimated: false }  # 코딩
  agentic: { s: 59.9, z: 0.86, r: 62.8, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.96, r: 35.6, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.94, r: 64.1, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.13, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.64, r: 74.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Gemini 3 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 210.0 t/s · TTFT 6.25s · 1M ctx` · 가성비 59.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.5 | +1.77 | 실측 | [[aa-omniscience]] 53.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 67.5 | +1.17 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 62.5 | +0.83 | 실측 | [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 62.8 | +0.86 | 실측 | [[apex-agents]] 28.0%×1.0, [[tau2-bench]] 80.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 35.6 | -0.96 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 64.1 | +0.94 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 66.9 | +1.13 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 74.6 | +1.64 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
