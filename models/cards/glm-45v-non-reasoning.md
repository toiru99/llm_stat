---
type: Model
title: GLM-4.5V (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.377
output_speed_tps: None
context_window: 64000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.1, z: -0.72, r: 39.2, estimated: false }  # 전문 지식
  reasoning: { s: 29.4, z: -0.72, r: 39.2, estimated: false }  # 추론
  coding: { s: 10.3, z: -0.9, r: 36.4, estimated: false }  # 코딩
  agentic: { s: 10.3, z: -0.82, r: 37.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 37.8, z: -1.69, r: 24.6, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.58, r: 26.3, estimated: false }  # 긴문맥
  instruction: { s: 23.2, z: -1.26, r: 31.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5V (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# GLM-4.5V (non-reasoning)

Z AI · Open · Medium · 컨텍스트 64k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.377/1M · None t/s · TTFT Nones · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.2 | -0.72 | 실측 | [[gpqa-diamond]] 57.3%×0.4, [[humanitys-last-exam]] 3.5%×0.3 |
| 추론 | 39.2 | -0.72 | 실측 | [[gpqa-diamond]] 57.3%×1.0, [[humanitys-last-exam]] 3.5%×1.0 |
| 코딩 | 36.4 | -0.9 | 실측 | [[terminal-bench]] 6.8%×0.5 |
| 에이전트 | 37.7 | -0.82 | 실측 | [[terminal-bench]] 6.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 24.6 | -1.69 | 실측 | [[mmmu-pro]] 43.0%×1.0 |
| 긴문맥 | 26.3 | -1.58 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 31.0 | -1.26 | 실측 | [[ifbench]] 28.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
