---
type: Model
title: GPT-5.1 Codex (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 106.59197693667066
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.8, z: 0.85, r: 62.8, estimated: false }  # 전문 지식
  reasoning: { s: 45.9, z: 0.52, r: 57.8, estimated: false }  # 추론
  coding: { s: 52.9, z: 0.45, r: 56.7, estimated: false }  # 코딩
  agentic: { s: 68.3, z: 0.82, r: 62.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 77.6, z: 0.32, r: 54.8, estimated: false }  # 멀티모달
  long_context: { s: 78.2, z: 0.74, r: 61.1, estimated: false }  # 긴문맥
  instruction: { s: 81.3, z: 1.15, r: 67.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 Codex (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5.1 Codex (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 106.59197693667066 t/s · TTFT 12.583572127672213s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.8 | +0.85 | 실측 | [[gpqa-diamond]] 85.959595959596%×0.4, [[humanitys-last-exam]] 25.7182576459685%×0.3 |
| 추론 | 57.8 | +0.52 | 실측 | [[critpt]] 5.71428571428571%×1.0, [[gpqa-diamond]] 85.959595959596%×1.0, [[humanitys-last-exam]] 25.7182576459685%×1.0 |
| 코딩 | 56.7 | +0.45 | 실측 | [[terminal-bench]] 34.8484848484849%×0.5 |
| 에이전트 | 62.3 | +0.82 | 실측 | [[tau2-bench]] 83.0409356725146%×1.0, [[terminal-bench]] 34.8484848484849%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.8 | +0.32 | 실측 | [[mmmu-pro]] 72.485549132948%×1.0 |
| 긴문맥 | 61.1 | +0.74 | 실측 | [[aa-lcr]] 69.3333333333333%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
