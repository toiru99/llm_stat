---
type: Model
title: Kimi K2.5
creator: Kimi
license: Open
intelligence_index: 36.0
price_blended_usd_1m: 0.49
output_speed_tps: 50.0
context_window: 256000
status: past
size_class: Large
params_b: 1000
is_reasoning: false
radar:
  knowledge: { s: 62.9, z: 1.06, r: 65.9, estimated: false }  # 전문 지식
  reasoning: { s: 52.6, z: 0.88, r: 63.2, estimated: false }  # 추론
  coding: { s: 72.1, z: 1.03, r: 65.4, estimated: false }  # 코딩
  agentic: { s: 47.7, z: 0.47, r: 57.0, estimated: false }  # 에이전트
  trust: { s: 37.2, z: 0.5, r: 57.6, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.67, r: 60.0, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.17, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.15, r: 67.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Kimi K2.5

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **36.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.6 · 출력 $3.0 · 혼합 $0.49/1M · 50.0 t/s · TTFT 2.83s · 256k ctx` · 가성비 73.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.9 | +1.06 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 31.0%×0.3 |
| 추론 | 63.2 | +0.88 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 31.0%×1.0 |
| 코딩 | 65.4 | +1.03 | 실측 | [[scicode]] 49.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 57.0 | +0.47 | 실측 | [[apex-agents]] 12.0%×1.0, [[gdpval]] 25.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 57.6 | +0.5 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | 60.0 | +0.67 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 67.5 | +1.17 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
