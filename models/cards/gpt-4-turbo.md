---
type: Model
title: GPT-4 Turbo
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 12
output_speed_tps: 117.76899668318215
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 2.8, z: -2.14, r: 17.9, estimated: false }  # 전문 지식
  reasoning: { s: 2.8, z: -1.61, r: 25.8, estimated: false }  # 추론
  coding: { s: 0.1, z: -1.35, r: 29.8, estimated: true }  # 코딩
  agentic: { s: 5.5, z: -1.36, r: 29.7, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 4.7, z: -1.44, r: 28.4, estimated: true }  # 긴문맥
  instruction: { s: 8.3, z: -1.9, r: 21.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-4 Turbo

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $10.0 · 출력 $30.0 · 혼합 $12/1M · 117.76899668318215 t/s · TTFT 1.181679312767458s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 17.9 | -2.14 | 실측 | [[humanitys-last-exam]] 3.1300000000000003%×0.3 |
| 추론 | 25.8 | -1.61 | 실측 | [[humanitys-last-exam]] 3.1300000000000003%×1.0 |
| 코딩 | 29.8 | -1.35 | 추정 | (추정) |
| 에이전트 | 29.7 | -1.36 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.4 | -1.44 | 추정 | (추정) |
| 지시 따르기 | 21.5 | -1.9 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
