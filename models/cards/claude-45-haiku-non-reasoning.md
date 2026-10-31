---
type: Model
title: Claude 4.5 Haiku (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.77
output_speed_tps: 81.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.7, z: -0.47, r: 42.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.5, z: -0.5, r: 42.4, estimated: false }  # 추론
  coding: { s: 40.9, z: 0.13, r: 51.9, estimated: false }  # 코딩
  agentic: { s: 40.9, z: 0.23, r: 53.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 54.8, z: -0.86, r: 37.1, estimated: false }  # 멀티모달
  long_context: { s: 56.2, z: 0.12, r: 51.8, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.44, r: 43.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Haiku (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude 4.5 Haiku (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.77/1M · 81.0 t/s · TTFT 0.58s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.9 | -0.47 | 실측 | [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 42.4 | -0.5 | 실측 | [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 51.9 | +0.13 | 실측 | [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 53.5 | +0.23 | 실측 | [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 37.1 | -0.86 | 실측 | [[mmmu-pro]] 55.0%×1.0 |
| 긴문맥 | 51.8 | +0.12 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 43.4 | -0.44 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
