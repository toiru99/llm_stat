---
type: Model
title: Gemini 3 Flash
creator: Google
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 0.435
output_speed_tps: 178.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.9, z: 2.09, r: 81.4, estimated: false }  # 전문 지식
  reasoning: { s: 62.9, z: 1.41, r: 71.1, estimated: false }  # 추론
  coding: { s: 76.4, z: 1.2, r: 68.0, estimated: false }  # 코딩
  agentic: { s: 60.4, z: 0.98, r: 64.8, estimated: false }  # 에이전트
  trust: { s: 8.0, z: -0.95, r: 35.8, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 1.01, r: 65.2, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.64, r: 74.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Gemini 3 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 178.0 t/s · TTFT 7.44s · 1M ctx` · 가성비 87.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 81.4 | +2.09 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 71.1 | +1.41 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 68.0 | +1.2 | 실측 | [[scicode]] 51.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 64.8 | +0.98 | 실측 | [[apex-agents]] 28.0%×1.0, [[tau2-bench]] 80.0%×1.0, [[tau3-banking]] 18.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 35.8 | -0.95 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 65.2 | +1.01 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 74.5 | +1.64 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
