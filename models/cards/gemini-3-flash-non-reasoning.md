---
type: Model
title: Gemini 3 Flash (non-reasoning)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.435
output_speed_tps: 208.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 57.2, z: 0.34, r: 55.1, estimated: false }  # 전문 지식
  reasoning: { s: 52.9, z: 0.32, r: 54.9, estimated: false }  # 추론
  coding: { s: 48.5, z: 0.38, r: 55.7, estimated: false }  # 코딩
  agentic: { s: 48.5, z: 0.49, r: 57.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.78, r: 61.6, estimated: false }  # 멀티모달
  long_context: { s: 61.8, z: 0.29, r: 54.3, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.33, r: 54.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Gemini 3 Flash (non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 에이전트
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 208.0 t/s · TTFT 0.87s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.1 | +0.34 | 실측 | [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 54.9 | +0.32 | 실측 | [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 55.7 | +0.38 | 실측 | [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 57.4 | +0.49 | 실측 | [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.6 | +0.78 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 54.3 | +0.29 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 54.9 | +0.33 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
