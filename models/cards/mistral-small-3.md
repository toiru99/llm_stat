---
type: Model
title: Mistral Small 3
creator: Mistral
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.12
output_speed_tps: 161.0
context_window: 32000
status: past
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 27.0, z: -0.65, r: 40.2, estimated: false }  # 전문 지식
  reasoning: { s: 24.3, z: -0.48, r: 42.7, estimated: false }  # 추론
  coding: { s: 40.0, z: -0.26, r: 46.1, estimated: false }  # 코딩
  agentic: { s: 20.2, z: -0.62, r: 40.7, estimated: false }  # 에이전트
  trust: { s: 42.9, z: 0.72, r: 60.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.43, r: 28.5, estimated: false }  # 긴문맥
  instruction: { s: 19.7, z: -1.33, r: 30.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# Mistral Small 3

Mistral · Open · Small(24B) · 컨텍스트 32k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 161.0 t/s · TTFT 0.76s · 32k ctx` · 가성비 58.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.2 | -0.65 | 실측 | [[gpqa-diamond]] 46.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 42.7 | -0.48 | 실측 | [[gpqa-diamond]] 46.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 46.1 | -0.26 | 실측 | [[scicode]] 24.0%×1.0 |
| 에이전트 | 40.7 | -0.62 | 실측 | [[tau2-bench]] 20.0%×1.0 |
| 신뢰성 | 60.7 | +0.72 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.5 | -1.43 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 30.0 | -1.33 | 실측 | [[ifbench]] 26.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
