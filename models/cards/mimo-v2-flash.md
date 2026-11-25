---
type: Model
title: MiMo-V2-Flash
creator: Xiaomi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.12
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: 309
is_reasoning: true
radar:
  knowledge: { s: 62.2, z: 0.75, r: 61.3, estimated: false }  # 전문 지식
  reasoning: { s: 42.8, z: 0.38, r: 55.7, estimated: false }  # 추론
  coding: { s: 42.5, z: 0.05, r: 50.7, estimated: false }  # 코딩
  agentic: { s: 69.2, z: 0.78, r: 61.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.7, z: 0.67, r: 60.1, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.94, r: 64.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# MiMo-V2-Flash

Xiaomi · Open · Large(309B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 61.3 | +0.75 | 실측 | [[gpqa-diamond]] 84.6465%×0.4, [[humanitys-last-exam]] 22.8452%×0.3 |
| 추론 | 55.7 | +0.38 | 실측 | [[critpt]] 4.28571%×1.0, [[gpqa-diamond]] 84.6465%×1.0, [[humanitys-last-exam]] 22.8452%×1.0 |
| 코딩 | 50.7 | +0.05 | 실측 | [[terminal-bench]] 28.0303%×0.5 |
| 에이전트 | 61.7 | +0.78 | 실측 | [[tau2-bench]] 95.0292%×1.0, [[terminal-bench]] 28.0303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.1 | +0.67 | 실측 | [[aa-lcr]] 70.6667%×1.0 |
| 지시 따르기 | 64.2 | +0.94 | 실측 | [[ifbench]] 64.2177%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
