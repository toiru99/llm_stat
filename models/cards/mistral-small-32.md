---
type: Model
title: Mistral Small 3.2
creator: Mistral
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.12
output_speed_tps: 149.0
context_window: 128000
status: past
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 25.2, z: -0.77, r: 38.4, estimated: false }  # 전문 지식
  reasoning: { s: 17.9, z: -0.87, r: 37.0, estimated: false }  # 추론
  coding: { s: 32.4, z: -0.67, r: 40.0, estimated: false }  # 코딩
  agentic: { s: 13.2, z: -0.93, r: 36.1, estimated: false }  # 에이전트
  trust: { s: 24.4, z: -0.18, r: 47.2, estimated: false }  # 신뢰성
  multimodal: { s: 47.1, z: -1.24, r: 31.5, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -0.84, r: 37.4, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -1.01, r: 34.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Mistral Small 3.2

Mistral · Open · Small(24B) · 컨텍스트 128k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 149.0 t/s · TTFT 0.87s · 128k ctx` · 가성비 91.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.4 | -0.77 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.0 | -0.87 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 40.0 | -0.67 | 실측 | [[scicode]] 26.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 36.1 | -0.93 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 30.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 47.2 | -0.18 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | 31.5 | -1.24 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 37.4 | -0.84 | 실측 | [[aa-lcr]] 19.0%×1.0 |
| 지시 따르기 | 34.8 | -1.01 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
