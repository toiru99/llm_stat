---
type: Model
title: Solar Pro 2 (non-reasoning)
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65536
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.1, z: -0.71, r: 39.3, estimated: false }  # 전문 지식
  reasoning: { s: 19.0, z: -0.8, r: 38.0, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 19.5, z: -0.97, r: 35.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 30.4, z: -0.83, r: 37.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Solar Pro 2 (non-reasoning)

Upstage · Proprietary · Unknown · 컨텍스트 65k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 39.3 | -0.71 | 실측 | [[gpqa-diamond]] 56.0606%×0.4, [[humanitys-last-exam]] 3.70714%×0.3 |
| 추론 | 38.0 | -0.8 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 56.0606%×1.0, [[humanitys-last-exam]] 3.70714%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[terminal-bench]] 4.54545%×0.5 |
| 에이전트 | 35.4 | -0.97 | 실측 | [[tau2-bench]] 31.8713%×1.0, [[terminal-bench]] 4.54545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 37.5 | -0.83 | 실측 | [[ifbench]] 33.7415%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
