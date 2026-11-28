---
type: Model
title: Kimi K2.5
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.49
output_speed_tps: 34.1533871561885
context_window: 256000
status: past
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 69.0, z: 1.08, r: 66.2, estimated: false }  # 전문 지식
  reasoning: { s: 46.5, z: 0.57, r: 58.5, estimated: false }  # 추론
  coding: { s: 52.9, z: 0.4, r: 56.0, estimated: false }  # 코딩
  agentic: { s: 58.0, z: 0.38, r: 55.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.2, z: 0.5, r: 57.5, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 81.6, z: 1.29, r: 69.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Kimi K2.5

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.6 · 출력 $3.0 · 혼합 $0.49/1M · 34.1533871561885 t/s · TTFT 2.97950636172495s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 66.2 | +1.08 | 실측 | [[gpqa-diamond]] 87.8788%×0.4, [[humanitys-last-exam]] 30.7229%×0.3 |
| 추론 | 58.5 | +0.57 | 실측 | [[critpt]] 3.14286%×1.0, [[gpqa-diamond]] 87.8788%×1.0, [[humanitys-last-exam]] 30.7229%×1.0 |
| 코딩 | 56.0 | +0.4 | 실측 | [[terminal-bench]] 34.8485%×0.5 |
| 에이전트 | 55.7 | +0.38 | 실측 | [[gdpval]] 846.28 Elo×1.0, [[tau2-bench]] 95.9064%×1.0, [[tau3-banking]] 14.2268%×1.0, [[terminal-bench]] 34.8485%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.5 | +0.5 | 실측 | [[mmmu-pro]] 75.3757%×1.0 |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 78%×1.0 |
| 지시 따르기 | 69.4 | +1.29 | 실측 | [[ifbench]] 70.2041%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
