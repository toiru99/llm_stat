---
type: Model
title: Gemini 3 Flash
creator: Google
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 0.435
output_speed_tps: 205.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.4, z: 1.85, r: 77.8, estimated: false }  # 전문 지식
  reasoning: { s: 61.1, z: 1.25, r: 68.8, estimated: false }  # 추론
  coding: { s: 59.1, z: 0.95, r: 64.2, estimated: false }  # 코딩
  agentic: { s: 59.7, z: 0.85, r: 62.8, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 90.3, z: 1.0, r: 64.9, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.69, r: 75.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Gemini 3 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 205.0 t/s · TTFT 6.51s · 1M ctx` · 가성비 71.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.8 | +1.85 | 실측 | [[aa-omniscience]] 53.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 68.8 | +1.25 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 64.2 | +0.95 | 실측 | [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 62.8 | +0.85 | 실측 | [[apex-agents]] 28.0%×1.0, [[tau2-bench]] 80.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 64.9 | +1.0 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 75.4 | +1.69 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
