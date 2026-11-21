---
type: Model
title: Llama 3.1 70B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.81
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.6, z: -1.2, r: 32.1, estimated: false }  # 전문 지식
  reasoning: { s: 13.5, z: -1.09, r: 33.7, estimated: false }  # 추론
  coding: { s: 4.6, z: -1.2, r: 32.0, estimated: false }  # 코딩
  agentic: { s: 10.0, z: -1.21, r: 31.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.1, z: -0.97, r: 35.5, estimated: true }  # 긴문맥
  instruction: { s: 31.3, z: -0.94, r: 35.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Llama 3.1 70B

Meta · Open · Medium · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.81 · 출력 $0.81 · 혼합 $0.81/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.1 | -1.2 | 실측 | [[gpqa-diamond]] 40.9090909090909%×0.4, [[humanitys-last-exam]] 4.47%×0.3 |
| 추론 | 33.7 | -1.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 40.9090909090909%×1.0, [[humanitys-last-exam]] 4.47%×1.0 |
| 코딩 | 32.0 | -1.2 | 실측 | [[terminal-bench]] 3.03030303030303%×0.5 |
| 에이전트 | 31.9 | -1.21 | 실측 | [[tau2-bench]] 15.204678362573102%×1.0, [[terminal-bench]] 3.03030303030303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.5 | -0.97 | 추정 | (추정) |
| 지시 따르기 | 35.8 | -0.94 | 실측 | [[ifbench]] 34.421768707483004%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
