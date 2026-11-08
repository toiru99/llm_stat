---
type: Model
title: Grok 4
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.2
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.7, z: 0.9, r: 63.5, estimated: false }  # 전문 지식
  reasoning: { s: 66.3, z: 0.93, r: 64.0, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.67, r: 60.1, estimated: false }  # 코딩
  agentic: { s: 57.5, z: 0.79, r: 61.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.0, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 76.7, z: 0.72, r: 60.8, estimated: false }  # 긴문맥
  instruction: { s: 58.4, z: 0.23, r: 53.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Grok 4

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $4.2/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.5 | +0.9 | 실측 | [[gpqa-diamond]] 87.7%×0.4, [[humanitys-last-exam]] 26.7%×0.3 |
| 추론 | 64.0 | +0.93 | 실측 | [[gpqa-diamond]] 87.7%×1.0, [[humanitys-last-exam]] 26.7%×1.0 |
| 코딩 | 60.1 | +0.67 | 실측 | [[terminal-bench]] 37.9%×0.5 |
| 에이전트 | 61.9 | +0.79 | 실측 | [[terminal-bench]] 37.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 60.8 | +0.72 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 53.5 | +0.23 | 실측 | [[ifbench]] 53.7%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
