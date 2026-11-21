---
type: Model
title: LFM2 1.2B
creator: Liquid AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32768
status: past
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 11.2, z: -1.74, r: 23.9, estimated: false }  # 전문 지식
  reasoning: { s: 7.1, z: -1.41, r: 28.9, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.36, r: 29.6, estimated: false }  # 코딩
  agentic: { s: 6.3, z: -1.33, r: 30.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 13.8, z: -1.68, r: 24.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2 1.2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# LFM2 1.2B

Liquid AI · Open · Tiny · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 23.9 | -1.74 | 실측 | [[gpqa-diamond]] 22.828282828282802%×0.4, [[humanitys-last-exam]] 5.56070435588508%×0.3 |
| 추론 | 28.9 | -1.41 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 22.828282828282802%×1.0, [[humanitys-last-exam]] 5.56070435588508%×1.0 |
| 코딩 | 29.6 | -1.36 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 30.0 | -1.33 | 실측 | [[tau2-bench]] 12.5730994152047%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 24.9 | -1.68 | 실측 | [[ifbench]] 21.9727891156463%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
