---
type: Model
title: GLM-4.7-Flash
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.061
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 36.5, z: -0.57, r: 41.5, estimated: false }  # 전문 지식
  reasoning: { s: 33.3, z: -0.55, r: 41.8, estimated: false }  # 추론
  coding: { s: 33.4, z: -0.14, r: 48.0, estimated: false }  # 코딩
  agentic: { s: 33.4, z: -0.03, r: 49.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.17, r: 47.4, estimated: false }  # 긴문맥
  instruction: { s: 68.4, z: 0.66, r: 59.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# GLM-4.7-Flash

Z AI · Open · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.07 · 출력 $0.4 · 혼합 $0.061/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.5 | -0.57 | 실측 | [[gpqa-diamond]] 58.1%×0.4, [[humanitys-last-exam]] 7.6%×0.3 |
| 추론 | 41.8 | -0.55 | 실측 | [[gpqa-diamond]] 58.1%×1.0, [[humanitys-last-exam]] 7.6%×1.0 |
| 코딩 | 48.0 | -0.14 | 실측 | [[terminal-bench]] 22.0%×0.5 |
| 에이전트 | 49.5 | -0.03 | 실측 | [[terminal-bench]] 22.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.4 | -0.17 | 실측 | [[aa-lcr]] 41.7%×1.0 |
| 지시 따르기 | 59.9 | +0.66 | 실측 | [[ifbench]] 60.8%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
