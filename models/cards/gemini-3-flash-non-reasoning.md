---
type: Model
title: Gemini 3 Flash (Non-reasoning)
creator: Google
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: 0.435
output_speed_tps: 185.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 65.9, z: 1.25, r: 68.8, estimated: false }  # 전문 지식
  reasoning: { s: 37.5, z: 0.15, r: 52.3, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.01, r: 65.2, estimated: false }  # 코딩
  agentic: { s: 46.0, z: 0.36, r: 55.4, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.85, r: 37.3, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 1.0, r: 65.0, estimated: false }  # 멀티모달
  long_context: { s: 63.9, z: 0.45, r: 56.7, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.35, r: 55.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Flash (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Gemini 3 Flash (Non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 185.0 t/s · TTFT 0.94s · 1M ctx` · 가성비 64.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.8 | +1.25 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 52.3 | +0.15 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 65.2 | +1.01 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 55.4 | +0.36 | 실측 | [[tau2-bench]] 43.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 37.3 | -0.85 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 65.0 | +1.0 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 56.7 | +0.45 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 55.2 | +0.35 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
