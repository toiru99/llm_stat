---
type: Model
title: Solar Pro 3
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.1005
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.7, z: -0.01, r: 49.9, estimated: false }  # 전문 지식
  reasoning: { s: 42.5, z: -0.03, r: 49.5, estimated: false }  # 추론
  coding: { s: 24.2, z: -0.45, r: 43.3, estimated: false }  # 코딩
  agentic: { s: 14.2, z: -0.7, r: 39.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.4, z: -0.5, r: 42.6, estimated: false }  # 긴문맥
  instruction: { s: 83.0, z: 1.3, r: 69.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Solar Pro 3

Upstage · Proprietary · Medium · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.9 | -0.01 | 실측 | [[gpqa-diamond]] 72.4%×0.4, [[humanitys-last-exam]] 10.3%×0.3 |
| 추론 | 49.5 | -0.03 | 실측 | [[gpqa-diamond]] 72.4%×1.0, [[humanitys-last-exam]] 10.3%×1.0 |
| 코딩 | 43.3 | -0.45 | 실측 | [[scicode]] 25.5%×1.0, [[terminal-bench]] 7.6%×0.5 |
| 에이전트 | 39.6 | -0.7 | 실측 | [[gdpval]] 272.0%×1.0, [[tau3-banking]] 8.7%×1.0, [[terminal-bench]] 7.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.6 | -0.5 | 실측 | [[aa-lcr]] 32.3%×1.0 |
| 지시 따르기 | 69.5 | +1.3 | 실측 | [[ifbench]] 71.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
