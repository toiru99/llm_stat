---
type: Model
title: GLM-4.5-Air
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.251
output_speed_tps: 77.0
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.1, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 41.6, z: -0.18, r: 47.3, estimated: false }  # 추론
  coding: { s: 30.3, z: -0.23, r: 46.6, estimated: false }  # 코딩
  agentic: { s: 30.3, z: -0.13, r: 48.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 52.8, z: 0.02, r: 50.2, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.67, r: 39.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5-Air
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GLM-4.5-Air

Z AI · Open · Medium · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.17 · 출력 $0.98 · 혼합 $0.251/1M · 77.0 t/s · TTFT 2.42s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 47.3 | -0.18 | 실측 | [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 46.6 | -0.23 | 실측 | [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 48.0 | -0.13 | 실측 | [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.2 | +0.02 | 실측 | [[aa-lcr]] 47.0%×1.0 |
| 지시 따르기 | 39.9 | -0.67 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
