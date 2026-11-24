---
type: Model
title: Claude 3 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.35
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.0, z: -1.3, r: 30.5, estimated: false }  # 전문 지식
  reasoning: { s: 12.0, z: -1.15, r: 32.7, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 11.2, z: -1.27, r: 31.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 21.7, z: -2.54, r: 12.0, estimated: false }  # 멀티모달
  long_context: { s: 31.2, z: -0.81, r: 37.8, estimated: false }  # 긴문맥
  instruction: { s: 33.7, z: -0.7, r: 39.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude 3 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.25 · 출력 $1.25 · 혼합 $0.35/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 30.5 | -1.3 | 실측 | [[gpqa-diamond]] 37.3737%×0.4, [[humanitys-last-exam]] 4.07785%×0.3 |
| 추론 | 32.7 | -1.15 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 37.3737%×1.0, [[humanitys-last-exam]] 4.07785%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[terminal-bench]] 0.757576%×0.5 |
| 에이전트 | 31.0 | -1.27 | 실측 | [[tau2-bench]] 21.0526%×1.0, [[terminal-bench]] 0.757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 12.0 | -2.54 | 실측 | [[mmmu-pro]] 30.8092%×1.0 |
| 긴문맥 | 37.8 | -0.81 | 실측 | [[aa-lcr]] 27.6667%×1.0 |
| 지시 따르기 | 39.6 | -0.7 | 실측 | [[ifbench]] 36.1224%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
